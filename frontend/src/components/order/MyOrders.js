import React, { Fragment, useEffect } from "react";
import "./MyOrders.css";
import { DataGrid } from "@mui/x-data-grid";
import MetaData from "../layout/MetaData";
import Loader from "../layout/loader/Loader";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  clearErrors,
  deleteMyOrder,
  myOrders,
} from "../../actions/orderAction";
import { useAlert } from "react-alert";
import LaunchIcon from "@mui/icons-material/Launch";
import { Link } from "react-router-dom";
import CancelIcon from "@mui/icons-material/Cancel";
import { Button } from "@mui/material";
import { DELETE_USER_ORDERS_RESET } from "../../constants/orderConstants";

const MyOrders = ({ history }) => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { orders, error, loading } = useSelector((state) => state.myOrders);

  const { isDeleted, error: deleteError } = useSelector(
    (state) => state.deleteMyOrder
  );

  const deleteOrderHandler = (id, userId) => {
    dispatch(deleteMyOrder(id, userId));
  };

  const rows = [];

  orders &&
    orders.forEach((item) => {
      rows.push({
        id: item._id,
        itemQty: item.orderItems.length,
        status: item.orderStatus,
        amount: item.totalPrice,
      });
    });

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 230, flex: 1 },
    {
      field: "status",
      headerName: "Status",
      minWidth: 120,
      flex: 0.5,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Delivered"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: "itemQty",
      headerName: "Item Qty",
      type: "number",
      minWidth: 70,
      flex: 0.3,
    },
    {
      field: "amount",
      headerName: "Amount",
      type: "number",
      minWidth: 120,
      flex: 0.5,
    },
    {
      field: "action",
      headerName: "Action",
      type: "number",
      minWidth: 130,
      sortable: false,
      // FOR GETTING THE DIANAMIC VALUE OF CELL
      renderCell: (params) => {
        return (
          <>
            <Link to={`/order/${params.getValue(params.id, "id")}`}>
              <LaunchIcon />
            </Link>
            {params.getValue(params.id, "status") !== "Delivered" && (
              <Button
                onClick={() =>
                  deleteOrderHandler(params.getValue(params.id, "id"), user._id)
                }
                className="redColor"
                title="Cancel Order"
              >
                <CancelIcon />
              </Button>
            )}
          </>
        );
      },
    },
  ];

  // IF CLEAR ERRORS
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (deleteError) {
      alert.error(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      alert.success("Your Order Cancelled Successfully");
      history.push("/orders");
      dispatch({ type: DELETE_USER_ORDERS_RESET });
    }

    dispatch(myOrders());
  }, [error, alert, dispatch, deleteError, history, isDeleted]);

  return (
    <Fragment>
      <MetaData title={`${user.name} - orders`} />

      {loading ? (
        <Loader />
      ) : (
        <div className="myOrdersPage">
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            autoHeight
            className="myOrdersTable"
          />

          <Typography id="myOrdersHeading">{user.name}'s Orders</Typography>
        </div>
      )}
    </Fragment>
  );
};

export default MyOrders;
