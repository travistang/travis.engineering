import { MetadataFormValue } from "@/services/metadata/types";
import { FaInfoCircle } from "react-icons/fa";
import Section from "../../create/components/section";
import InputGroup from "../input-group";
import TagInput from "../tag-input";

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
            className="input input-sm w-full col-span-full"
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
            onChange={() => onChange({ public: !metadata.public })}
          />
        </InputGroup>
        <InputGroup label="Tags" className="col-span-full lg:col-span-2">
          <TagInput
            values={metadata.tags}
            onChange={(tags) => onChange({ tags })}
          />
        </InputGroup>
        <InputGroup label="Summary" className="col-span-full lg:col-span-2">
          <input
            className="input input-sm"
            placeholder="To be shown on preview"
            value={metadata.summary}
            onChange={(e) => onChange({ summary: e.target.value })}
          />
        </InputGroup>
        <InputGroup label="article URL" className="col-span-full lg:col-span-2">
          <label className="input flex items-center gap-2 input-sm">
            <span className="pl-4 pr-2 bg-neutral -ml-3 rounded-l-lg whitespace-nowrap font-mono">{`<blog URL>/`}</span>
            <input
              className="grow"
              value={metadata.readableURLName}
              placeholder="default yyyy/MM/dd-<title>"
              onChange={(e) => onChange({ readableURLName: e.target.value })}
            />
          </label>
        </InputGroup>
      </div>
    </Section>
  );
}
