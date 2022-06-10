import { useMoralis } from "react-moralis"

export default function ManualHeader() {
    const { enableweb3 } = useMoralis()

    return <div>Hi from header!</div>
}

// The hard way:

// The easy way:
