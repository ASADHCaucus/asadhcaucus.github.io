import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"


export default function MemberDirectory() {
    return (
        <main className="w-full flex-1 space-y-12 pb-20 sm:space-y-16">
            <section className="mx-auto w-full max-w-7xl px-6 pt-12 sm:px-10 sm:pt-16 lg:px-20 lg:pt-20">
                <Dialog defaultOpen disablePointerDismissal>
                    <DialogContent showCloseButton={false}>
                        <DialogHeader>
                            <DialogTitle>Password protected</DialogTitle>
                            <DialogDescription>
                                The member directory is password protected. Please enter the password to access the directory.
                            </DialogDescription>
                            <Input type="password" placeholder="Enter password" />
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            </section>
        </main>
    );
}