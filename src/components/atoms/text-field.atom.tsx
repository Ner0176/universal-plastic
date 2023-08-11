import { FC, useEffect, useState } from "react";
import { Input } from "../../shadcn/components/ui/input";
import { Label } from "../../shadcn/components/ui/label";

interface ITextField {
  id: string;
  borderRight: boolean;
  value: string;
  handleChange: (name: string, value: string) => void;
  handleValidate: (name: string, value: string) => void;
  placeholder?: string;
}

const TextField: FC<ITextField> = (props) => {
  const [disabled, setDisabled] = useState<boolean>(false);

  useEffect(() => {
    if(props.value.toLowerCase().includes("obtaining")) setDisabled(true);
    else setDisabled(false);
  }, [props.value])

  const inputClassName = props.borderRight ? "bg-cyan-50 border-cyan-100 border-r-2 my-2" : "bg-cyan-50 my-2 rounded-lg"
  
  const handleOnChange = (event: any) => {
    const { id , value } = event.target;
    props.handleChange(id, value);
  }

  const handleValidate = (event: any) => {
    const { id, value } = event.target;
    props.handleValidate(id, value);
  }

  return (
    <div className="flex-1">
      <div className="pb-2 bg-white">
        <Label htmlFor={props.id}>{props.id}</Label>
      </div>
      <Input
        id={props.id}
        placeholder={props.placeholder}
        value={props.value}
        className={inputClassName}
        onChange={handleOnChange}
        disabled={disabled}
        onBlur={handleValidate}
      />
    </div>
  );
};

export default TextField;
