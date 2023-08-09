import { useLoaderData } from 'react-router-dom';
import './RecentWorksAdmin.css';
import Table from 'react-bootstrap/Table';
import { AiOutlineEye, AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'

const RecentWorksAdmin = () => {
    const tableData = useLoaderData();
    return (
        <div>
            <div className=' pageBox'>
                <div className=' pageBoxInner'>
                    <div>
                        <h4>MANAGE RECENT PROJECTS</h4>
                        <p>All Projects</p>
                    </div>
                    <button className='btn btn-primary'> Add Project</button>
                </div>
                <Table hover className=''>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Title</th>
                            <th>Project Tag</th>
                            <th>Date Created</th>
                            <th>Date Edited</th>
                            <th style={{ width: '135px' }} >Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tableData.map((data, ind) =>
                                <tr key={data.id}>
                                    <td>{ind + 1}</td>
                                    <td className='colspan-2'>{data.serviceName}</td>
                                    <td>{data.mainTag}</td>
                                    <td>{data.registered}</td>
                                    <td>--</td>
                                    <td className='d-flex' style={{ width: '135px' }}>
                                        <h6 className='p-2 me-2 border rounded text-light bg-primary tableActionIcon'><AiOutlineEye /></h6>
                                        <h6 className='p-2 me-2 border rounded text-light bg-success tableActionIcon'><AiOutlineEdit /></h6>
                                        <h6 className='p-2 me-2 border rounded text-light bg-secondary tableActionIcon'><AiOutlineDelete /></h6>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default RecentWorksAdmin;