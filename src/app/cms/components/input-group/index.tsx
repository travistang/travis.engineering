import classNames from "classnames";

type Props = {
  className?: string;
  label?: string;
  children?: React.ReactNode;
};
export default function InputGroup({ className, children, label }: Props) {
  return (
    <div className={classNames("form-control", className)}>
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      {children}
    </div>
  );
}
