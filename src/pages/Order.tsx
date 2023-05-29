import FormLayout from "../components/FormLayout";
import Title from "../components/Title";

function Order() {
    return (
        <>
            <Title
                mainText="Order Now"
                subText="quickly order a new vacation"
            />

            <FormLayout>
                <form>
                    <div className="row g-3">
                        <div className="col-12">
                            <label className="form-label">
                                Vacation Package
                            </label>
                            <select className="form-select">
                                <option value="">Please select...</option>
                            </select>
                        </div>
                        <div className="col-12">
                            <label className="form-label">
                                Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                            />
                        </div>
                        <div className="col-12">
                            <label className="form-label">
                                Email
                            </label>
                            <input
                                type="text"
                                className="form-control"
                            />
                        </div>
                        <div className="form-check mt-4">
                            <input
                                type="checkbox"
                                className="form-check-input"
                            />
                            <label className="form-check-label">
                                I agree to terms...
                            </label>
                        </div>

                        <button
                            className="w-100 btn btn-primary btn-lg mt-4"
                            type="submit"
                        >
                            Continue to checkout
                        </button>
                    </div>
                </form>
            </FormLayout>
        </>
    );
}

export default Order;