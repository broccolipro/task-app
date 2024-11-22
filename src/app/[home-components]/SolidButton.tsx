import {Button} from "antd";


export default function ({title, layout, icon}) {
    return (
        <button className={`
                            w-full h-10 bg-tint flex justify-center items-center
                            rounded-full text-white
                            `}>
            {title}
        </button>
    )
}
