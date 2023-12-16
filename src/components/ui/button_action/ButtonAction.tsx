import "./Button.css"

export default function ButtonAction({text, onClicked}: {text: string, onClicked: () => void}) {

    return (
        <button className={"Button Action"} onClick={onClicked}>
            {text}
        </button>
    );
};