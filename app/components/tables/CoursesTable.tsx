import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import { TableVirtuoso, TableComponents } from "react-virtuoso";
import { ICourse } from "@/app/interfaces/IUserData";
import { titleFont, font } from "@/app/style/localFonts";

const columns = [
  { dataKey: "name", label: "Name", width: "30%" },
  { dataKey: "grade", label: "Grade", width: "20%" },
  { dataKey: "description", label: "Description", width: "50%" },
] as const;

const sortableColumns: Array<keyof ICourse> = ["name", "grade"];

interface CoursesTableProps {
  courses: ICourse[];
}

const Scroller = React.forwardRef<HTMLDivElement>((props, ref) => (
  <TableContainer
    {...props}
    ref={ref}
    className="redScrollbar"
    sx={{
      backgroundColor: "var(--dblue)",
      maxHeight: "100%",
    }}
  />
));
Scroller.displayName = "VirtuosoScroller";

const TableComp = (props: React.ComponentProps<typeof Table>) => (
  <Table
    {...props}
    stickyHeader
    sx={{ borderCollapse: "separate", tableLayout: "fixed" }}
  />
);
TableComp.displayName = "VirtuosoTable";

const TableHeadComp = React.forwardRef<HTMLTableSectionElement>(
  (props, ref) => <TableHead {...props} ref={ref} />
);
TableHeadComp.displayName = "VirtuosoTableHead";

const TableBodyComp = React.forwardRef<HTMLTableSectionElement>(
  (props, ref) => <TableBody {...props} ref={ref} />
);
TableBodyComp.displayName = "VirtuosoTableBody";

const VirtuosoTableComponents: TableComponents<ICourse> = {
  Scroller,
  Table: TableComp,
  TableHead: TableHeadComp,
  TableRow,
  TableBody: TableBodyComp,
};

export default function CoursesTable({ courses }: CoursesTableProps) {
  const [order, setOrder] = React.useState<"asc" | "desc">("asc");
  const [orderBy, setOrderBy] = React.useState<keyof ICourse>("name");

  const handleRequestSort = (property: keyof ICourse) => {
    if (!sortableColumns.includes(property)) return;
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const sortedCourses = React.useMemo(() => {
    if (!sortableColumns.includes(orderBy)) return courses;
    return [...courses].sort((a, b) => {
      const aValue = a[orderBy] ?? "";
      const bValue = b[orderBy] ?? "";
      if (aValue < bValue) return order === "asc" ? -1 : 1;
      if (aValue > bValue) return order === "asc" ? 1 : -1;
      return 0;
    });
  }, [courses, order, orderBy]);

  function fixedHeaderContent() {
    return (
      <TableRow>
        {columns.map((column) => (
          <TableCell
            key={column.dataKey}
            variant="head"
            align="left"
            style={{
              width: column.width,
              color: "white",
              fontWeight: "bold",
              background: "var(--bblue)",
              fontFamily: titleFont.style.fontFamily,
            }}
            sortDirection={orderBy === column.dataKey ? order : false}
          >
            {sortableColumns.includes(column.dataKey as keyof ICourse) ? (
              <TableSortLabel
                active={orderBy === column.dataKey}
                direction={orderBy === column.dataKey ? order : "asc"}
                onClick={() =>
                  handleRequestSort(column.dataKey as keyof ICourse)
                }
                sx={{
                  color: "#fff",
                  fontFamily: titleFont.style.fontFamily,
                  fontSize: {
                    xs: "0.9rem",
                    sm: "1rem",
                    md: "1.1rem",
                  },
                  "&.Mui-active": { color: "#fff" },
                  "& .MuiTableSortLabel-icon": { color: "#fff !important" },
                  "&:hover": {
                    color: "var(--secondary)",
                    "& .MuiTableSortLabel-icon": {
                      color: "var(--secondary) !important",
                    },
                  },
                }}
              >
                {column.label}
              </TableSortLabel>
            ) : (
              column.label
            )}
          </TableCell>
        ))}
      </TableRow>
    );
  }

  function rowContent(_index: number, course: ICourse) {
    return (
      <>
        {columns.map((column) => (
          <TableCell
            key={column.dataKey}
            align="left"
            sx={{
              color: "white",
              background: "var(--dblue)",
              fontFamily: font.style.fontFamily,
              fontSize: {
                xs: "0.85rem", // <600px
                sm: "0.9rem", // 600px+
                md: "0.95rem", // 900px+
              },
            }}
          >
            {course[column.dataKey] ?? "-"}
          </TableCell>
        ))}
      </>
    );
  }

  // Dynamic height: 56px per row + header (56px), max 425px
  const rowHeight = 56;
  const headerHeight = 56;
  const maxHeight = 425;
  const height = Math.min(headerHeight + rowHeight * courses.length, maxHeight);

  return (
    <Paper
      style={{
        height,
        width: "100%",
        background: "var(--dblue)",
        border: "2px solid var(--dsecondary)",
        marginTop: "2rem",
      }}
    >
      <TableVirtuoso
        data={sortedCourses}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={rowContent}
      />
    </Paper>
  );
}
