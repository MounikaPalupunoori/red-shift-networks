import { Button } from '@/components/ui/button';
import React, { useCallback, useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import UserForm from '../Components/userForm';
import AlertDialogComponent from '@/components/CustomComponents/AlertDialog';
import UserChangePasswordForm from '../Components/userChangePassword';
import BulkUploadForm from '../Components/bulkUploadUsers';
import UsersTable from '../Components/usersTable';


export default function ManageUsers() {
    const [loading, setLoading] = useState(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState()
    const [type, setType] = useState();
    const [alertOpen, setAlertOpen] = useState({
        singleDelete: false,
        multiDelete: false
    });
    const [dialogType, setDialogType] = useState('');
    const [selectedData, setSelectedData] = useState([]);
    const handleEditUser = useCallback((data) => {
        setSelectedUser(data);
        setType('edit');
        setIsDialogOpen(true);
        setDialogType('userForm')
    }, []);

    const handleChildData = (data) => {
        setSelectedData(data);
    };

    const handleAddUser = (value) => {
        setSelectedUser([])
        setType('add')
        setIsDialogOpen(true);
        setDialogType(value)
    };

    const handleDeleteUser = (type, data) => {
        if (type === "single") {
            setSelectedData(data)
            setAlertOpen((prevState) => ({ ...prevState, singleDelete: true }));
        } else if (type === "multi") {
            setAlertOpen((prevState) => ({ ...prevState, multiDelete: true }));
        }
    };

    const handleChangePass = useCallback(() => {
        setIsDialogOpen(true)
        setDialogType('changePassForm')
    }, []);



    const handleCloseDialog = () => {
        setIsDialogOpen(false);
    }
    const handleConfirm = () => {
        setAlertOpen({
            singleDelete: false,
            multiDelete: false
        });

        setRowData((prevData) => {
            if (Array.isArray(selectedData)) {
                const idsToDelete = selectedData.map(user => user.id);
                return prevData.filter(user => !idsToDelete.includes(user.id));
            } else {
                return prevData.filter(user => user.id !== selectedData.id);
            }
        });
        setSelectedData([])
    };


    const closeAlert = () => {
        setAlertOpen({
            singleDelete: false,
            multiDelete: false
        })
        setSelectedData([])
    }

    const handleBulkUpload = () => {
        setIsDialogOpen(true);
        setDialogType('bulkUpload');
    }
    const [rowData, setRowData] = useState([
        { id: 1, name: "Uma", priviliges: "Admin", email: "uma@gmail.com", logo: "", networkGroup: "All", type: "All" },
        { id: 2, name: "John", priviliges: "User", email: "john@example.com", logo: "", networkGroup: "Sales", type: "Basic" },
        { id: 3, name: "Alice", priviliges: "Editor", email: "alice@example.com", logo: "", networkGroup: "Marketing", type: "Premium" },
        { id: 4, name: "Bob", priviliges: "Admin", email: "bob@example.com", logo: "", networkGroup: "HR", type: "All" },
        { id: 5, name: "Eve", priviliges: "User", email: "eve@example.com", logo: "", networkGroup: "IT", type: "Basic" },
        { id: 6, name: "David", priviliges: "Editor", email: "david@example.com", logo: "", networkGroup: "Finance", type: "Premium" },
        { id: 7, name: "Sophia", priviliges: "Admin", email: "sophia@example.com", logo: "", networkGroup: "Operations", type: "All" },
        { id: 8, name: "Michael", priviliges: "User", email: "michael@example.com", logo: "", networkGroup: "All", type: "Basic" },
        { id: 9, name: "Linda", priviliges: "Editor", email: "linda@example.com", logo: "", networkGroup: "Support", type: "Premium" },
        { id: 10, name: "Chris", priviliges: "Admin", email: "chris@example.com", logo: "", networkGroup: "Engineering", type: "All" },
        { id: 11, name: "Jessica", priviliges: "User", email: "jessica@example.com", logo: "", networkGroup: "HR", type: "Basic" },
        { id: 12, name: "Ryan", priviliges: "Editor", email: "ryan@example.com", logo: "", networkGroup: "Sales", type: "Premium" },
        { id: 13, name: "Emma", priviliges: "Admin", email: "emma@example.com", logo: "", networkGroup: "Marketing", type: "All" },
        { id: 14, name: "Olivia", priviliges: "User", email: "olivia@example.com", logo: "", networkGroup: "Operations", type: "Basic" },
        { id: 15, name: "Noah", priviliges: "Editor", email: "noah@example.com", logo: "", networkGroup: "Finance", type: "Premium" },
        { id: 16, name: "Liam", priviliges: "Admin", email: "liam@example.com", logo: "", networkGroup: "IT", type: "All" },
        { id: 17, name: "Sophia", priviliges: "User", email: "sophia2@example.com", logo: "", networkGroup: "Support", type: "Basic" },
        { id: 18, name: "Isabella", priviliges: "Editor", email: "isabella@example.com", logo: "", networkGroup: "Engineering", type: "Premium" },
        { id: 19, name: "Ethan", priviliges: "Admin", email: "ethan@example.com", logo: "", networkGroup: "HR", type: "All" },
        { id: 20, name: "Mia", priviliges: "User", email: "mia@example.com", logo: "", networkGroup: "Finance", type: "Basic" },
        { id: 21, name: "Daniel", priviliges: "Editor", email: "daniel@example.com", logo: "", networkGroup: "Marketing", type: "Premium" },
        { id: 22, name: "Matthew", priviliges: "Admin", email: "matthew@example.com", logo: "", networkGroup: "Sales", type: "All" },
        { id: 23, name: "Ava", priviliges: "User", email: "ava@example.com", logo: "", networkGroup: "Operations", type: "Basic" },
        { id: 24, name: "James", priviliges: "Editor", email: "james@example.com", logo: "", networkGroup: "Support", type: "Premium" },
        { id: 25, name: "Harper", priviliges: "Admin", email: "harper@example.com", logo: "", networkGroup: "IT", type: "All" },
        { id: 26, name: "Benjamin", priviliges: "User", email: "benjamin@example.com", logo: "", networkGroup: "Engineering", type: "Basic" },
        { id: 27, name: "Ella", priviliges: "Editor", email: "ella@example.com", logo: "", networkGroup: "HR", type: "Premium" },
        { id: 28, name: "Alexander", priviliges: "Admin", email: "alexander@example.com", logo: "", networkGroup: "Marketing", type: "All" },
        { id: 29, name: "Grace", priviliges: "User", email: "grace@example.com", logo: "", networkGroup: "Operations", type: "Basic" },
        { id: 30, name: "Carter", priviliges: "Editor", email: "carter@example.com", logo: "", networkGroup: "Finance", type: "Premium" }
    ]);
    const handleSaveUser = (userData, formType) => {
        setRowData((prev) => {
            if (formType === "add") {
                const newId = prev.length + 1;
                return [{ ...userData, id: newId }, ...prev];
            } else {
                return prev.map((user) => (user.id === userData.id ? userData : user));
            }
        });
        setIsDialogOpen(false);
    };

    const handleBulkUploads = (uploadedData) => {
        const formattedData = uploadedData.map((item, index) => ({
            id: rowData.length + index + 1,
            name: item.name || "",
            email: item.email || "",
            priviliges: item.priviliges || "",
            networkGroup: item.networkGroup || '',
            type: item.type || "",
        }));

        setRowData((prev) => [...prev, ...formattedData]);
    };
    return (
        <div className="w-full h-full overflow-hidden">
            <div className='flex items-center p-4' style={{ height: '60px' }}>
                <p className='font-bold text-2xl'>Users</p>
                <div className='p-2 justify-end w-full flex space-x-4'>
                    <Button tabIndex="-1" disabled={selectedData.length > 0} onClick={() => handleAddUser('userForm')}>Add User</Button>
                    <Button tabIndex="-1" disabled={selectedData.length === 0} onClick={() => handleDeleteUser('multi')}>Delete</Button>
                    <Button disabled={selectedData.length > 0} onClick={() => handleBulkUpload()}>Bulk Upload Users</Button>
                    <Button>Help</Button>
                </div>
            </div>
            <div style={{ height: 'calc(100% -  60px)', width: '100%' }} >
                <UsersTable rowData={rowData} handleEditUser={handleEditUser}
                    handleDeleteUser={handleDeleteUser}
                    handleChangePass={handleChangePass} onSelectData={handleChildData} />
            </div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen} className='p-2'>
                <DialogContent className="max-h-[85vh] h-auto flex flex-col p-2">
                    <DialogHeader className="p-1">
                        <div className="relative flex items-center justify-center mt-4">
                            <div className="absolute left-0 top-1/2 w-1/4 border-t border-gray-400"></div>
                            <DialogTitle className="relative text-2xl font-bold px-4 bg-white">
                                {dialogType === 'userForm'
                                    ? (type === 'add' ? 'Add User Form' : 'Edit User Form')
                                    : dialogType === 'bulkUpload'
                                        ? 'Bulk Upload'
                                        : 'Change Password'}
                            </DialogTitle>
                            <div className="absolute right-0 top-1/2 w-1/4 border-t border-gray-400"></div>
                        </div>                        <DialogDescription />
                    </DialogHeader>
                    {dialogType === 'userForm' ?
                        <UserForm selectedUser={selectedUser} type={type} close={handleCloseDialog} onSaveUser={handleSaveUser} />
                        : dialogType === 'changePassForm' ? <UserChangePasswordForm selectedUser={selectedUser} close={handleCloseDialog} />
                            : dialogType === 'bulkUpload' && <BulkUploadForm close={handleCloseDialog} onBulkUpload={handleBulkUploads} />
                    }
                </DialogContent>
            </Dialog>
            <AlertDialogComponent
                title="Are you absolutely sure?"
                description="This action cannot be undone. Deleting this user will remove their account and all associated data."
                onConfirm={handleConfirm}
                open={alertOpen.singleDelete}
                close={closeAlert}
            />
            <AlertDialogComponent
                title="Are you absolutely sure?"
                description="This action cannot be undone. Deleting this user will remove their account and all associated data."
                onConfirm={handleConfirm}
                open={alertOpen.multiDelete}
                close={closeAlert}
            />
        </div>
    )
}
