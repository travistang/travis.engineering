import { FaInfoCircle } from "react-icons/fa";
import Section from "../../create/components/section";
import InputGroup from "../input-group";
import TagInput from "../tag-input";
import { MetadataFormValue } from "./_utils/metadata-form";

type Props = {
  metadata: MetadataFormValue;
  onChange: (formValue: Partial<MetadataFormValue>) => void;
};
export default function MetadataForm({ metadata, onChange }: Props) {
  return (
    <Section title="Blog info" className="col-span-full" icon={FaInfoCircle}>
      <div className=" grid grid-cols-6 gap-2">
        <InputGroup label="Title" className="col-span-5">
          <input
            className="input input-ghosted input-sm w-full col-span-full"
            placeholder="Every blog needs a title!"
            value={metadata.title}
            onChange={(e) => onChange({ title: e.target.value })}
          />
        </InputGroup>
        <InputGroup label="Public" className="col-span-1">
          <input
            type="checkbox"
            className="toggle toggle-primary"
            checked={metadata.public}
            onClick={() => onChange({ public: !metadata.public })}
          />
        </InputGroup>
        <InputGroup label="Tags" className="col-span-full">
          <TagInput
            values={metadata.tags}
            onChange={(tags) => onChange({ tags })}
          />
        </InputGroup>
      </div>
    </Section>
  );
}
