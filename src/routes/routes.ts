import * as express from "express";
import CustomerController from "../controllers/CustomerController";

export default function setRoutes(app:any){

    const router = express();
    const customerControl = new CustomerController();

    app.use("/api",router);

    // Routes
    router.route("/customers").post(customerControl.createCustomer);
    router.route("/customers").get(customerControl.getAllCustomers);
    router.route("/customers/:id").get(customerControl.getCustomerById);
    router.route("/customers/:id").put(customerControl.updateCustomer);
    router.route("/customers/:id").delete(customerControl.deleteCustomer);
    router.route('/customers/change-password/:id').put(customerControl.updateCustomerPassword);
}