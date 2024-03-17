import React, { useEffect, useState } from 'react';
import BookData from '../data/BookData';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../Redux/Slices/AuthSLice';
import toast, { Toaster } from 'react-hot-toast';
import { setLogMessage } from '../Redux/Slices/ToastSlice';
import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from 'reactstrap';

function AdminPanel() {
    const [books, setBooks] = useState(BookData);
    const [formData, setFormData] = useState({
        id: '',
        title: '',
        author: '',
        publication_year: '',
        price: '',
        rating: '',
        qty: '',
        category: '',
        description: '',
        cover_image: ''
    });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);

    const addBook = async (e) => {
        e.preventDefault();

        console.log(formData)
        try {
            const response = await axios.post('https://mern-assignment-vb2z.onrender.com/api/books', formData);
            if (response.status === 201) {
                // Book added successfully
                closeModal();
                // Optionally, you can update the state with the newly added book
                // setBooks([...books, response.data]);
                // Display a success message to the user
                toast.success('Book added successfully');
            }
        } catch (error) {
            // Handle error
        }
    };
    const closeModal = () => {
        setShowModal(false);
    };
    const editBook = (index) => {
        const updatedBooks = [...books];
        updatedBooks[index].title = 'Updated Book';
        updatedBooks[index].author = 'Updated Author';
        updatedBooks[index].price = 10;
        updatedBooks[index].qty = 5;
        updatedBooks[index].category = 'Updated Category';
        setBooks(updatedBooks);
    };

    const deleteBook = (index) => {
        const updatedBooks = [...books];
        updatedBooks.splice(index, 1);
        setBooks(updatedBooks);
    };


    useEffect(() => {
        // Set up interval to fetch user data every 29 seconds
        const intervalId = setInterval(() => {
            const token = sessionStorage.setItem("token", "false");
            //console.log(token)
            if (!token) {
                sessionStorage.removeItem("User")
                sessionStorage.removeItem("token")
                dispatch(logoutUser())
                toast("Session get expired,Please Log In Again....", {
                    icon: '😣 ',
                });
                navigate("/");
            }
        }, 1000 * 60 * 20);

        // Clean up the interval on component unmount
        return () => clearInterval(intervalId);
    }, [dispatch]);
    const handleLogout = async () => {
        // try {
        //     // Make a request to the backend logout endpoint
        //     console.log(formData)
        //     const response = await axios.get('https://mern-assignment-vb2z.onrender.com/api/logout');
        //     const data = response.data;
        //     if (data.success) {
        //         // Clear user data from sessionStorage or localStorage if needed
        //         sessionStorage.removeItem('User');
        //         sessionStorage.removeItem('token');
        //         dispatch(logoutUser());
        //         dispatch(setLogMessage('"Logout Successfully"...'));
        //         // toast("Logout Successfully", {
        //         //   icon: '🙄 ',
        //         // });
        //         navigate("/")
        //         // Perform other logout-related tasks (e.g., redirecting to login page)
        //     } else {
        //         // Handle logout failure
        //         console.error('Logout failed:', data.message);
        //         // Display error message to the user if needed
        //     }
        // } catch (error) {
        //     // Handle network errors or other issues
        //     console.error('Logout error:', error);
        //     // Display error message to the user if needed
        // }
        toast("Don't worry You will Automatically Logout after 20min", {
            icon: '🥱 ',
        });
    }
    const handlePreview = (id) => {
        navigate(`/view-book/${id}`)
    }

    return (
        <div className="m-6 py-3 relative">
            <Toaster  position="top-left"/>
            <div className='flex flex-row items-center justify-between mb-5'>
                <h2 className='text-2xl font-bold mr-2 items-center'>Welcome to Admin Panel</h2>
                <button className='p-2 bg-cyan-400  rounded-lg text-blue-600' onClick={handleLogout}>Logout</button>
            </div>
            <button className="p-2 bg-green-400 rounded-lg my-3 text-white" onClick={() => setShowModal(true)}>Add Book</button>
            {showModal && (
                <div className="fixed top-10 sm:w-[90vw] sm:h-[90vh] sm:items-center flex items-center justify-center">
                    <div className="relative w-auto  max-w-3xl mx-auto">
                        <div className="relative flex flex-col bg-gray-200 border-2 border-gray-300 rounded-lg outline-none focus:outline-none md:w-[20vw] w-[90vw]">
                            <div className="flex items-start justify-between p-5 border-b border-gray-300 rounded-t">
                                <h3 className="text-xl font-semibold">Add Book Details</h3>
                                <button className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none" onClick={closeModal}>
                                    <span className="bg-transparent text-blue-600 h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
                                </button>
                            </div>
                            <div className="relative p-6 flex-col">
                                <form onSubmit={addBook}>
                                    <div className="mb-2">
                                        <label htmlFor="id" className="block text-sm font-medium text-gray-700">id</label>
                                        <input type="number" id="id" name="id" className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" value={formData.id} onChange={handleChange} required />
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                                        <input type="text" id="title" name="title" className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" value={formData.title} onChange={handleChange} required />
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="author" className="block text-sm font-medium text-gray-700">Author</label>
                                        <input type="text" id="author" name="author" className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" value={formData.author} onChange={handleChange} required />
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="publication_year" className="block text-sm font-medium text-gray-700">Publication Year</label>
                                        <input type="number" id="publication_year" name="publication_year" className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" value={formData.publication_year} onChange={handleChange} required />
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
                                        <input type="number" id="price" name="price" className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" value={formData.price} onChange={handleChange} required />
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="rating" className="block text-sm font-medium text-gray-700">Rating</label>
                                        <input type="number" id="rating" name="rating" className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" value={formData.rating} onChange={handleChange} required />
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="qty" className="block text-sm font-medium text-gray-700">Quantity</label>
                                        <input type="number" id="qty" name="qty" className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" value={formData.qty} onChange={handleChange} required />
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                                        <input type="text" id="category" name="category" className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" value={formData.category} onChange={handleChange} required />
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                                        <input type="text" id="description" name="description" className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" value={formData.description} onChange={handleChange} required />
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="cover_image" className="block text-sm font-medium text-gray-700">Cover Image URL</label>
                                        <input type="text" id="cover_image" name="cover_image" className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" value={formData.cover_image} onChange={handleChange} required />
                                    </div>
                                    <div className="flex items-center justify-end p-2 border-t border-gray-300 rounded-b">
                                        <button className="p-2 bg-green-500 rounded-lg text-white hover:bg-green-600 focus:outline-none" type='submit'>Submit</button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            )}
            <table className='w-full text-center border border-gray-500 border-collapse'>
                <thead>
                    <tr>
                        <th className="border border-gray-500 bg-blue-500 text-white  m-2 p-2 font-normal">ID</th>
                        <th className="border border-gray-500 bg-blue-500 text-white m-2 p-2 font-normal">Title</th>
                        <th className="border border-gray-500 bg-blue-500 text-white m-2 p-2 font-normal">Author</th>
                        <th className="border border-gray-500 bg-blue-500 text-white m-2 p-2 font-normal">Price</th>
                        <th className="border border-gray-500 bg-blue-500 text-white m-2 p-2 font-normal">Qty</th>
                        <th className="border border-gray-500 bg-blue-500 text-white m-2 p-2 font-normal">Category</th>
                        <th className="border border-gray-500 bg-blue-500 text-white m-2 p-2 font-normal">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book, index) => (
                        <tr key={book.id}>
                            <td className="border border-gray-500 text-blue-700">{book.id}</td>
                            <td className="border border-gray-500">{book.title}</td>
                            <td className="border border-gray-500">{book.author}</td>
                            <td className="border border-gray-500">{book.price}</td>
                            <td className="border border-gray-500">{book.qty}</td>
                            <td className="border border-gray-500">{book.category}</td>
                            <td className="border border-gray-500">
                                {
                                    showModal ? (<div><button className=" px-3 py-2 m-2 bg-yellow-500 rounded-lg" disabled>Edit</button>
                                        <button className="px-3 py-2 m-2 bg-red-500 rounded-lg ml-3" disabled>Delete</button></div>) : (<div><button className=" px-3 py-2 m-2 bg-yellow-500 rounded-lg" onClick={() => editBook(index)}>Edit</button>
                                            <button className="px-3 py-2 m-2 bg-red-500 rounded-lg ml-3" onClick={() => deleteBook(index)}>Delete</button></div>)
                                }
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
}

export default AdminPanel;
