import { useState } from 'react';
import FileBase64 from 'react-file-base64';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../../hook/useTitle';

const AddServices = () => {
    useTitle('AddServices');
    const [item, setItem] = useState({ name: '', img: '', price: '', description: '' });
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/services';

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://pick-food-server.vercel.app/services', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(item), // Correctly stringify the item
            });

            if (response.ok) {
                const data = await response.json();
                if (data.acknowledged) {
                    toast.success('Added successfully');
                    e.target.reset();
                    navigate(from, { replace: true });
                }
            } else {
                throw new Error('Failed to add the service');
            }
        } catch (error) {
            console.error('Error adding service:', error);
        }
    };

    return (
        <div className='my-8'>
            <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-10">
                {/* left side form */}
                <div className="flex-shrink-0 w-full max-w-sm py-10" data-aos="fade-left" data-aos-duration="800">
                    <h1 className="text-2xl text-center text-[#EF8E33] font-bold">Add New Services</h1>
                    <p className='text-center mt-1 mb-0'>
                        <span className='text-gray-400'>----</span> upload <span className='text-gray-400'>----</span>
                    </p>
                    <form onSubmit={onSubmitHandler} className="card-body p-2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input ype="text"
                                className="input input-bordered"
                                onChange={(e) => setItem({ ...item, name: e.target.value })}
                                placeholder="your name" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                Image
                            </label>
                            <FileBase64
                                type="file"
                                multiple={false}
                                onDone={({ base64 }) => setItem({ ...item, img: base64 })}
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input
                                type="text"
                                onChange={(e) => setItem({ ...item, price: e.target.value })}
                                placeholder="price" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea type="text"
                                onChange={(e) => setItem({ ...item, description: e.target.value })}
                                placeholder="description" className="input textarea-bordered textarea-lg w-full" required />
                        </div>
                        <div className="form-control mt-6">
                            <input className="an border !bg-[#EF8E33] !px-3 py-2 !text-white" type="submit" value="Add Service" />
                        </div>
                    </form>
                </div>
                {/* right side image */}
                <img src="https://media.istockphoto.com/id/483264639/photo/breakfast.jpg?s=612x612&w=0&k=20&c=BwDINTffvXp5RTfa3SYihVpecDyosxwN-M50JBqV8k8=" alt="" data-aos="fade-right" data-aos-duration="1000" />
            </div>
            <ToastContainer />
        </div>
    );
};

export default AddServices;