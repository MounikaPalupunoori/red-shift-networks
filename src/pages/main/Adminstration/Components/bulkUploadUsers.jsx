import React, { useState } from 'react';

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
import { Button } from '@/components/ui/button';
import { Loader2, Upload } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

export default function BulkUploadForm({ close, onBulkUpload }) {
    const [loading, setLoading] = useState(false);
    const [selectedFileName, setSelectedFileName] = useState("");
    const { toast } = useToast()
    const FormSchema = Yup.object().shape({
        file: Yup.mixed()
            .required("File is required")
    });

    const form = useForm({
        resolver: yupResolver(FormSchema),
        defaultValues: {
            file: null,
        },
    });

    const onSubmit = async (data) => {
        if (!data.file) return;
        setLoading(true);
        try {
            const reader = new FileReader();
            reader.onload = (e) => {
                const arrayBuffer = e.target.result;
                const workbook = XLSX.read(arrayBuffer, { type: "array" });
                const sheetName = workbook.SheetNames[0];
                const sheet = workbook.Sheets[sheetName];
                const parsedData = XLSX.utils.sheet_to_json(sheet);
                console.log(parsedData);
                onBulkUpload(parsedData);
            };
            reader.readAsArrayBuffer(data.file);
        } catch (error) {
            console.error("Error reading file:", error);
        } finally {
            setLoading(false);
        }
        toast({
            title: "Added users sucessfully",
        })
        close();
    };

    return (
        <>
            <div className="flex-1 overflow-auto p-2">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6" id="userForm">
                        <FormField
                            control={form.control}
                            name="file"
                            render={({ field }) => (
                                <FormItem>
                                    <Label
                                        htmlFor="bulkUpload"
                                        className="cursor-pointer w-max font-bold flex max-w items-center space-x-2 p-2 bg-[#e1e6eb] rounded"
                                    >
                                        <Upload />
                                        <p>Upload File</p>
                                    </Label>
                                    <FormControl>
                                        <Input
                                            accept=".xlsx"
                                            id="bulkUpload"
                                            type="file"
                                            className="hidden"
                                            onChange={(e) => {
                                                const file = e.target.files[0];
                                                if (file) {
                                                    setSelectedFileName(file.name);
                                                    field.onChange(file);
                                                }
                                            }}
                                        />
                                    </FormControl>
                                    {selectedFileName && (
                                        <p className="mt-2 text-gray-600">Selected File: {selectedFileName}</p>
                                    )}
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </form>
                </Form>
            </div>

            <div className="flex justify-end space-x-4 p-2 border-t">
                <Button variant="outline" className='cursor-pointer w-30' onClick={close}>Cancel</Button>
                {loading ? (
                    <Button className="w-30" type="submit" disabled>
                        <Loader2 className="animate-spin" />
                        Please wait
                    </Button>
                ) : (
                    <Button form='userForm' type='submit' className='w-30'>Upload</Button>
                )}
            </div>

        </>
    );
}
