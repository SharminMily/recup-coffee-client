/* eslint-disable react/prop-types */
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const CoffeeCard = ({coffee}) => {
    const { _id, name, quantity, supplier, taste, photo } = coffee;

    const handleDelete = _id =>{
        console.log( _id,'hello');
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
     
            fetch(`http://localhost:5000/coffee/${_id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                    Swal.fire(
                    'Deleted!',
                    'Your Coffee has been deleted.',
                    'success'
              )
                }
            })


            }
          })

    }

    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
            <figure><img className="h-48 w-72 mr-4" src={photo} alt="Movie" /></figure>
            <div className="flex justify-evenly w-full  ">
                <div className="text-center">
                    <h2 className="card-title ">Name: {name}</h2>
                    <p className="text-center">{quantity}</p>
                    <p className="text-center">{supplier}</p>
                    <p className="text-center">{taste}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical space-y-4">
                        <button className="btn">View</button>
                        <Link to={`updateCoffee/${_id}`}>
                        <button className="btn">Edit</button>
                        </Link>
                        <button
                            onClick={() => handleDelete(_id)}
                            className="btn bg-red-700">X</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default CoffeeCard;