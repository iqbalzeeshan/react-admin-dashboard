import { GridColDef } from "@mui/x-data-grid";
import "./addNew.scss";

type Props = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddNew = ({ setOpen, slug, columns }: Props) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="addNew">
      <div className="modal">
        <span className="closeModal" onClick={() => setOpen(false)}>
          X
        </span>
        <h2>Add new {slug}</h2>
        <form onSubmit={handleSubmit}>
          {columns
            .filter((item) => item.field !== "id" && item.field !== "img")
            .map((column) => (
              <div className="item">
                <label htmlFor="">{column.headerName}</label>
                <input type={column.type} placeholder={column.headerName} />
              </div>
            ))}
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default AddNew;
