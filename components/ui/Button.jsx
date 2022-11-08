import Link from "next/link"

const button = ({url,variant, text}) => {
    return (
        <Link href={url} className={"button"+variant}>{text}</Link>
    );
}

export default button;