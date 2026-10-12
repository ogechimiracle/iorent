"use client";

import * as React from "react";
import {
  type ColumnDef,
  type ColumnVisibilityState,
  type RowSelectionState,
  type SortingState,
  type TableFeatures,
  columnFilteringFeature,
  createFilteredRowModel,
  createPaginatedRowModel,
  createSortedRowModel,
  flexRender,
  globalFilteringFeature,
  rowPaginationFeature,
  rowSelectionFeature,
  rowSortingFeature,
  tableFeatures,
  useTable,
  columnVisibilityFeature,
} from "@tanstack/react-table";

import {
  ArrowDown,
  ArrowUp,
  ArrowUpDown,
  MoreHorizontal,
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export type DataTableColumn<T> = {
  key: keyof T & string;
  label: string;
  sortable?: boolean;
  searchable?: boolean;
  hidden?: boolean;
  className?: string;
  render?: (row: T) => React.ReactNode;
};

export type DataTableAction<T> = {
  label: string;
  onClick: (row: T) => void;
  variant?: "default" | "destructive";
  hidden?: (row: T) => boolean;
  disabled?: (row: T) => boolean;
};

type DataTableProps<T extends Record<string, any> & { id?: string | number }> = {
  data: T[];
  columns: DataTableColumn<T>[];
  actions?: DataTableAction<T>[];
  searchable?: boolean;
  searchKey?: keyof T & string;
  searchPlaceholder?: string;
  selectable?: boolean;
  pagination?: boolean;
  pageSize?: number;
  pageSizeOptions?: number[];
  loading?: boolean;
  emptyMessage?: string;
  getRowId?: (row: T) => string;
  toolbar?: React.ReactNode;
  onRowClick?: (row: T) => void;
  onSelectionChange?: (rows: T[]) => void;
};

export function DataTable<T extends Record<string, any> & { id?: string | number }>({
  data,
  columns,
  actions = [],
  searchable = true,
  searchKey,
  searchPlaceholder = "Search records...",
  selectable = true,
  pagination = true,
  pageSize = 10,
  pageSizeOptions = [5, 10, 20, 50, 100],
  loading = false,
  emptyMessage = "No records found.",
  getRowId,
  toolbar,
  onRowClick,
  onSelectionChange,
}: DataTableProps<T>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [columnVisibility, setColumnVisibility] =
    React.useState<ColumnVisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState<RowSelectionState>({});

  const tableColumns = React.useMemo<ColumnDef<TableFeatures, T, any>[]>(() => {
    const result: ColumnDef<TableFeatures, T, any>[] = [];

    if (selectable) {
      result.push({
        id: "__select",
        header: ({ table }) => (
          <Checkbox
            checked={table.getIsAllPageRowsSelected()}
            indeterminate={table.getIsSomePageRowsSelected()}
            onCheckedChange={(checked) =>
              table.toggleAllPageRowsSelected(checked === true)
            }
            aria-label="Select all rows on this page"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(checked) => row.toggleSelected(checked === true)}
            aria-label="Select row"
            onClick={(event) => event.stopPropagation()}
          />
        ),
        enableSorting: false,
        enableHiding: false,
      });
    }

    for (const column of columns) {
      result.push({
        id: column.key,
        accessorFn: (row) => {
          const value = row[column.key];
          return value == null ? "" : String(value);
        },
        enableSorting: column.sortable !== false,
        enableHiding: true,
        header: ({ column: tableColumn }) => {
          if (column.sortable === false) return column.label;

          const sorted = tableColumn.getIsSorted();

          return (
            <Button
              variant="ghost"
              className="-ml-3 h-8 px-3"
              onClick={() => tableColumn.toggleSorting(sorted === "asc")}
            >
              {column.label}
              {sorted === "asc" ? (
                <ArrowUp className="ml-2 size-4" />
              ) : sorted === "desc" ? (
                <ArrowDown className="ml-2 size-4" />
              ) : (
                <ArrowUpDown className="ml-2 size-4 opacity-50" />
              )}
            </Button>
          );
        },
        cell: ({ row }) => (
          <div className={column.className}>
            {column.render
              ? column.render(row.original)
              : String(row.original[column.key] ?? "—")}
          </div>
        ),
      });
    }

    if (actions.length > 0) {
      result.push({
        id: "__actions",
        enableHiding: false,
        enableSorting: false,
        header: "Actions",
        cell: ({ row }) => {
          const availableActions = actions.filter(
            (action) => !action.hidden?.(row.original),
          );

          if (!availableActions.length) return null;

          return (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Open row actions"
                  onClick={(event) => event.stopPropagation()}
                >
                  <MoreHorizontal className="size-4" />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end">
                <DropdownMenuGroup>
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuSeparator />

                  {availableActions.map((action) => (
                    <DropdownMenuItem
                      key={action.label}
                      disabled={action.disabled?.(row.original)}
                      className={
                        action.variant === "destructive"
                          ? "text-destructive focus:text-destructive"
                          : undefined
                      }
                      onSelect={() => action.onClick(row.original)}
                    >
                      {action.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          );
        },
      });
    }

    return result;
  }, [columns, selectable, actions]);

  const table = useTable({
    data,
    columns: tableColumns,
    getRowId: (row: T, index: number) =>
      getRowId?.(row) ?? String(row.id ?? index),
    state: {
      sorting,
      globalFilter,
      columnVisibility,
      rowSelection,
    },
    initialState: {
      pagination: { pageIndex: 0, pageSize },
      columnVisibility: Object.fromEntries(
        columns.map((column) => [column.key, !column.hidden]),
      ),
    },
    enableRowSelection: selectable,
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    globalFilterFn: (row: any, _columnId: string, filterValue: string) => {
      const query = filterValue.toLowerCase();

      if (searchKey) {
        return String(row.original[searchKey] ?? "")
          .toLowerCase()
          .includes(query);
      }

      return columns
        .filter((column) => column.searchable !== false)
        .some((column) =>
          String(row.original[column.key] ?? "")
            .toLowerCase()
            .includes(query),
        );
    },
    features: tableFeatures({
      rowSelectionFeature,
      rowSortingFeature,
      columnVisibilityFeature,
      columnFilteringFeature,
      globalFilteringFeature,
      rowPaginationFeature,
      filteredRowModel: createFilteredRowModel(),
      sortedRowModel: createSortedRowModel(),
      paginatedRowModel: createPaginatedRowModel(),
    }),
  });

  React.useEffect(() => {
    onSelectionChange?.(
      table.getSelectedRowModel().rows.map((row) => row.original as T),
    );
  }, [rowSelection, data, onSelectionChange, table]);

  return (
    <div className="w-full min-w-0 space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {searchable ? (
          <div className="relative w-full sm:max-w-sm">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

            <Input
              value={globalFilter}
              onChange={(event) => setGlobalFilter(event.target.value)}
              placeholder={searchPlaceholder}
              className="pl-9 pr-9"
              aria-label="Search records"
            />

            {globalFilter && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-1 top-1/2 size-7 -translate-y-1/2"
                onClick={() => setGlobalFilter("")}
                aria-label="Clear search"
              >
                <X className="size-4" />
              </Button>
            )}
          </div>
        ) : (
          <div />
        )}

        <div className="flex flex-wrap items-center gap-2">
          {toolbar}

          {selectable && table.getSelectedRowModel().rows.length > 0 && (
            <Badge variant="secondary">
              {table.getSelectedRowModel().rows.length} selected
            </Badge>
          )}

          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="outline" className="gap-2">
                <SlidersHorizontal className="size-4" />
                Columns
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              <DropdownMenuGroup>
                {table
                  .getAllLeafColumns()
                  .filter((column) => column.getCanHide())
                  .map((column) => (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      checked={column.getIsVisible()}
                      onCheckedChange={(checked) =>
                        column.toggleVisibility(!!checked)
                      }
                      onSelect={(event) => event.preventDefault()}
                    >
                      {columns.find((item) => item.key === column.id)?.label ??
                        column.id}
                    </DropdownMenuCheckboxItem>
                  ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border bg-card text-card-foreground">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-muted/50">
              {table.getHeaderGroups().map((group) => (
                <TableRow key={group.id}>
                  {group.headers.map((header) => (
                    <TableHead key={header.id} className="whitespace-nowrap">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>

            <TableBody>
              {loading ? (
                Array.from({ length: Math.min(pageSize, 5) }).map((_, i) => (
                  <TableRow key={i}>
                    {table.getVisibleLeafColumns().map((column) => (
                      <TableCell key={column.id}>
                        <div className="h-4 w-24 max-w-full animate-pulse rounded bg-muted" />
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : table.getRowModel().rows.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                    className={
                      onRowClick
                        ? "cursor-pointer hover:bg-muted/50"
                        : "hover:bg-muted/30"
                    }
                    onClick={() => onRowClick?.(row.original as T)}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id} className="whitespace-nowrap">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={table.getVisibleLeafColumns().length}
                    className="h-32 text-center text-muted-foreground"
                  >
                    {emptyMessage}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      {pagination && (
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            {table.getFilteredRowModel().rows.length === 0
              ? "No results"
              : `Showing ${table.state.pagination.pageIndex * table.state.pagination.pageSize + 1}–${Math.min(
                  (table.state.pagination.pageIndex + 1) *
                    table.state.pagination.pageSize,
                  table.getFilteredRowModel().rows.length,
                )} of ${table.getFilteredRowModel().rows.length} results`}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Select
              value={String(table.state.pagination.pageSize)}
              onValueChange={(value) => table.setPageSize(Number(value))}
            >
              <SelectTrigger className="h-9 w-[130px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {pageSizeOptions.map((size) => (
                  <SelectItem key={size} value={String(size)}>
                    {size} per page
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <span className="text-sm text-muted-foreground">
              Page {table.state.pagination.pageIndex + 1} of{" "}
              {Math.max(table.getPageCount(), 1)}
            </span>

            <Button
              variant="outline"
              size="sm"
              disabled={!table.getCanPreviousPage()}
              onClick={() => table.previousPage()}
            >
              Previous
            </Button>

            <Button
              variant="outline"
              size="sm"
              disabled={!table.getCanNextPage()}
              onClick={() => table.nextPage()}
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
