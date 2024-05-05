import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const BookService = () => {

    const service = useLoaderData();
    const { title, _id ,price} = service;

    const {user} = useContext(AuthContext);

    const handleBookService = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const order = {
            customerName: name,
            email,
            date,
            service: _id,
            price:price
        }

        console.log(order);

        // const dueAmount = form.dueAmount.value;
        // const serviceId = _id;
        // const data = { name, date, email, dueAmount, serviceId };
        // fetch('http://localhost:5000/book-service', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // })
        //    .then(res => res.json())
        //    .then(data => {
        //         if (data.error) {
        //             console.log(data.error);
        //         }
        //         else {
        //             console.log(data);
        //         }
        //     })
        //    .catch(err => {
        //         console.log(err);
        //     })
    }

    return (
        <div>
            <h2 className="text-center text-3xl">Book Services: {title} </h2>
            <form onSubmit={handleBookService} className="card-body">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} placeholder="name" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" placeholder="Date" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due Amount</span>
                        </label>
                        <input type="text" defaultValue={'$' + price} placeholder="Due Amount" className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary btn-block" type="submit" value="Order Confirm" />
                </div>
            </form>
            <div className='card-body'>

            </div>
        </div>
    );
};

export default BookService;