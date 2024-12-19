'use client'


import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import {useContext} from "react";
import {AppContext} from "@/shared/providers/AppProvider";

export default function PresentAlertDialog() {

    const {alertIsOpen, setOrderIsOpen} = useContext(AppContext)

    return (
        <AlertDialog open={alertIsOpen} onOpenChange={setOrderIsOpen} >
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your
                        account and remove your data from our servers.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    {/*<AlertDialogCancel>Cancel</AlertDialogCancel>*/}
                    <AlertDialogAction></AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
