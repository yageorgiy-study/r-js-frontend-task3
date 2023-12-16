import "./Button.css"
export default function ButtonTick({isTicked, onClicked}: {isTicked: boolean, onClicked: () => void}) {
    let classNames: string[] = ["Button", "Tick"];

    if(isTicked)
        classNames.push("Active");

    return (
        <button className={classNames.join(" ")} onClick={onClicked}>
            {isTicked ? "✅" : "⌛"}
        </button>
    );
};