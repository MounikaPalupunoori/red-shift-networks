import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'
import UserListTable from '../Components/UsersTable'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import * as Yup from 'yup';
import { Loader2 } from 'lucide-react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function ManageUsers() {
    const usersData = [{
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },
    {
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },
    {
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },
    {
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },
    {
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },
    {
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },
    {
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },
    {
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },{
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },
    {
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },{
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },
    {
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },{
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },
    {
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },{
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },
    {
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },{
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },
    {
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },{
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },
    {
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },{
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },
    {
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },{
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },
    {
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },{
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },
    {
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },{
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },
    {
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },{
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },
    {
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },{
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },
    {
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },{
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },
    {
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },{
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },
    {
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },{
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },
    {
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },{
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },
    {
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },{
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },
    {
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },{
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },
    {
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },{
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },
    {
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },{
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },
    {
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },{
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },
    {
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },{
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },
    {
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },{
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },
    {
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },{
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },
    {
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },{
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },
    {
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },{
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },
    {
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },{
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },
    {
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },{
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },
    {
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },{
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },
    {
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },{
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },
    {
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },{
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },
    {
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },{
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },
    {
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },{
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },
    {
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },{
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },
    {
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },{
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },
    {
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },{
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },
    {
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },{
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },
    {
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },{
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },
    {
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },{
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },
    {
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },{
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },
    {
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },{
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },
    {
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },{
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },
    {
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },{
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },
    {
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },{
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },
    {
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },{
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },
    {
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },{
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },
    {
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },{
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },
    {
        name: 'uma',
        priviliges: 'Admin',
        email: 'uma@gmail.com',
        networkGroup: 'All',
        logo: 'noLogo',
        type: 'All'
    },
]
    const [loading, setLoading] = useState(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState()
    const [type, setType] = useState();
    const priviligesTypes = ['Read-Write', 'Admin']
    const networkGroupTypes = ['All']
    const handleEditUser = (data) => {
        setSelectedUser(data);
        setType('edit');
        setIsDialogOpen(true)
    }

    const handleDeleteUser = (data) => {
        console.log(data)
    }

    const handleAddUser = () => {
        setSelectedUser([])
        setType('add')
        setIsDialogOpen(true);
    }

    const handleCloseDialog = () => {
        setIsDialogOpen(false);
    }

    const FormSchema = Yup.object({
        email: Yup.string().email('Invalid email').required('Required'),
        name: Yup.string()
            .required("Required."),

    });

    const form = useForm({
        resolver: yupResolver(FormSchema),
        defaultValues: {
            name: selectedUser?.name || '',
            priviliges: selectedUser?.priviliges || '',
            email: selectedUser?.email || '',
            networkGroup: selectedUser?.networkGroup || '',
            logo: selectedUser?.logo || '',
            type: selectedUser?.type || '',
            password: '',
            confirmPassword: ''

        },
    });
    useEffect(() => {
        if (selectedUser) {
            form.reset({
                name: selectedUser?.name || '',
                priviliges: selectedUser?.priviliges || '',
                email: selectedUser?.email || '',
                networkGroup: selectedUser?.networkGroup || '',
                logo: selectedUser?.logo || '',
                type: selectedUser?.type || '',
            });
        }
    }, [selectedUser, form]);
    const onSubmit = async (data) => {
        setLoading(true)
        console.log(data)
        setTimeout(() => {
            setLoading(false)

        }, 1000);
    }


    return (
        <div className="w-full h-full overflow-hidden">
            <div className='flex items-center p-2'>
                <p className='font-bold'>Users</p>
                <div className='p-2 justify-end w-full flex space-x-4'>
                    <Button className='cursor-pointer' onClick={handleAddUser}>Add</Button>
                    <Button>Help</Button>
                </div>
            </div>

            <div style={{ height: 'calc(100% -  60px)', width: '100%' }} >
                <UserListTable data={usersData} handleEditUser={handleEditUser} handleDeleteUser={handleDeleteUser} />
            </div>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen} className='p-2'>
                <DialogContent className="h-[85vh] overflow-hidden p-2">
                    <DialogHeader className='p-1'>
                        <DialogTitle>{type === 'add' ? 'Add' : 'Edit'} User</DialogTitle>
                    </DialogHeader>
                    <div className='overflow-auto p-2'>


                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>User Name *</FormLabel>
                                            <FormControl>
                                                <div>
                                                    <Input
                                                        placeholder="Enter User Name"
                                                        {...field}
                                                    />

                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                {type === 'add' && <>
                                    <FormField
                                        control={form.control}
                                        name="password"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Password *</FormLabel>
                                                <FormControl>
                                                    <div>
                                                        <Input
                                                            type='text'
                                                            placeholder="Enter User Password"
                                                            {...field}
                                                        />

                                                    </div>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="confirmPassword"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Confirm Password *</FormLabel>
                                                <FormControl>
                                                    <div>
                                                        <Input
                                                            type='text'
                                                            placeholder="Enter Confirm Password"
                                                            {...field}
                                                        />

                                                    </div>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </>}
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email Id</FormLabel>
                                            <FormControl>
                                                <div>
                                                    <Input
                                                        type='text'
                                                        placeholder="Enter Email Id"
                                                        {...field}
                                                    />

                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="priviliges"
                                    render={({ field }) => (
                                        <FormItem className="w-full">
                                            <FormLabel>Priviliges</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Choose Priviliges" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    {priviligesTypes.map((item, index) => (
                                                        <SelectItem value={item} key={index}>{item}</SelectItem>
                                                    ))}

                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="networkGroup"
                                    render={({ field }) => (
                                        <FormItem className="w-full">
                                            <FormLabel>Network Group Name</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Choose Network Group" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    {networkGroupTypes.map((item, index) => (
                                                        <SelectItem value={item} key={index}>{item}</SelectItem>
                                                    ))}

                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="logo"
                                    render={({ field }) => (
                                        <FormItem className="w-full">
                                            <FormLabel>Logo</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Choose Logo" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value='noLogo'>NoLogo</SelectItem>

                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="type"
                                    render={({ field }) => (
                                        <FormItem className="w-full">
                                            <FormLabel>Type</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Choose User Type" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value='All'>All</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </form>
                        </Form>
                    </div>
                    <div className='flex justify-between'>
                    <Button variant='outline'>
                            Cancel
                        </Button>
                    {loading ? (
                        <Button className="w-full" type="submit" disabled>
                            <Loader2 className="animate-spin" />
                            Please wait
                        </Button>
                    ) : (
                        <Button>
                            {type === 'add' ? 'Add' : 'Update'}
                        </Button>
                    )}
                    </div>
                    
                </DialogContent>
            </Dialog>
        </div>
    )
}
