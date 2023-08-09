import { useLoaderData } from 'react-router-dom';
import './RecentWorksAdmin.css';
import Table from 'react-bootstrap/Table';
import { useState } from 'react';
import TableProject from './Table/TableProject';

const RecentWorksAdmin = () => {
    const tableData = useLoaderData();
    const [isOpen, setIsOpen] = useState(false);
    const [show, setShow] = useState(false);
    const [position, setPosition] = useState('middle-center');

    const toggleShow = () => setShow(!show);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
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
                            <TableProject
                            key={ind}
                            ind={ind}
                            picture={data.picture}
                            serviceName={data.serviceName}
                            mainTag={data.mainTag}
                            registered={data.registered}
                            cliant={data.cliant}
                            shortDescription={data.shortDescription}
                            tags={data.tags}
                            about={data.about}
                            keyFeatures={data.keyFeatures}
                            materials={data.materials}
                            />
                            )
                        }
                    </tbody>
                </Table>

            </div>
        </div>
    );
};

export default RecentWorksAdmin;