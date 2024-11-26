import { Button } from "@/components/ui/button"
import Link from "next/link";

export default function ({title, layout, icon}) {
    return (
        <Button asChild>
            <Link href="">Регистрация</Link>
        </Button>

    )
}
