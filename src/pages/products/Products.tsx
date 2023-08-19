import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable";
import { products } from "../../data";
import "./products.scss";
import { useState } from "react";
import AddNew from "../../components/addNew/AddNew";

//
const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Image",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="avatar" />;
    },
  },
  {
    field: "title",
    headerName: "Title",
    width: 200,
    editable: true,
  },
  {
    field: "color",
    headerName: "Color",
    width: 120,
    editable: true,
  },
  {
    field: "producer",
    headerName: "Company",
    width: 130,
    editable: true,
  },
  {
    field: "price",
    headerName: "Price",
    width: 110,
    editable: true,
  },
  {
    field: "createdAt",
    headerName: "Created at",
    width: 110,
    editable: true,
  },

  {
    field: "inStock",
    headerName: "In-Stock",
    width: 100,
    type: "boolean",
  },
];

const Products = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="products">
      <div className="info">
        <h2>Products</h2>
        <button onClick={() => setOpen(true)}>Add New Prodcut</button>
      </div>
      <DataTable columns={columns} rows={products} slug="product" />
      {open && <AddNew slug="product" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Products;
