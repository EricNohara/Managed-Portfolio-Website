import React from "react";
import { useUserDataContext } from "@/app/context/UserDataProvider";
import { IUserSkill } from "@/app/interfaces/IUserData";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import { TableVirtuoso, TableComponents } from "react-virtuoso";
import { titleFont, font } from "@/app/style/fonts/localFonts";

const columns = [
  { dataKey: "name", label: "Name", width: "32%" },
  { dataKey: "proficiency", label: "Proficiency (0-10)", width: "32%" },
  {
    dataKey: "years_of_experience",
    label: "Years of Experience",
    width: "36%",
  },
] as const;

type Skill = IUserSkill;

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

const VirtuosoTableComponents: TableComponents<Skill> = {
  Scroller,
  Table: TableComp,
  TableHead: TableHeadComp,
  TableRow,
  TableBody: TableBodyComp,
};

export default function SkillsTableCard() {
  const userData = useUserDataContext();
  const [order, setOrder] = React.useState<"asc" | "desc">("asc");
  const [orderBy, setOrderBy] = React.useState<keyof Skill>("name");

  const handleRequestSort = (property: keyof Skill) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const sortedSkills = React.useMemo(() => {
    if (!userData?.skills) return [];
    return [...userData.skills].sort((a, b) => {
      const aValue = a[orderBy] ?? "";
      const bValue = b[orderBy] ?? "";
      if (aValue < bValue) return order === "asc" ? -1 : 1;
      if (aValue > bValue) return order === "asc" ? 1 : -1;
      return 0;
    });
  }, [userData?.skills, order, orderBy]);

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
            <TableSortLabel
              active={orderBy === column.dataKey}
              direction={orderBy === column.dataKey ? order : "asc"}
              onClick={() => handleRequestSort(column.dataKey)}
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
                  color: "var(--secondary)", // Use your red variable or a hex code like "#ec2d47"
                  "& .MuiTableSortLabel-icon": {
                    color: "var(--secondary) !important",
                  },
                },
              }}
            >
              {column.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    );
  }

  function rowContent(_index: number, skill: Skill) {
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
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {skill[column.dataKey] ?? "-"}
          </TableCell>
        ))}
      </>
    );
  }

  return (
    <Paper
      style={{
        height: 425,
        width: "100%",
        background: "var(--dblue)",
        border: "2px solid var(--dsecondary)",
      }}
    >
      <TableVirtuoso
        data={sortedSkills}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={rowContent}
      />
    </Paper>
  );
}
