import classNames from "classnames";
import { FormEventHandler, useCallback, useState } from "react";
import toast from "react-hot-toast";
import { FaCheck, FaTimes } from "react-icons/fa";
import { useTagSearch } from "../../_hooks/use-tag-search";
import SearchResultPanel from "./search-result-panel";

type Props = {
  values: string[];
  onChange: (values: string[]) => void;
  className?: string;
  label?: string;
  placeholder?: string;
};

export default function TagInput({
  values,
  onChange,
  className,
  placeholder,
}: Props) {
  const [inputValue, setInputValue] = useState("");
  const [tagsSearchResult, loading] = useTagSearch(inputValue);

  const onRemoveItemAtIndex = useCallback(
    (index: number) => {
      const newResults = [...values];
      newResults.splice(index, 1);
      onChange(newResults);
    },
    [values, onChange]
  );
  const appendTag = useCallback(
    (newTag: string) => {
      if (!newTag) return;
      if (values.find((v) => v.toLowerCase() === newTag.toLowerCase())) {
        toast.error("There are tags with the same input already!");
        return;
      }
      onChange([...values, newTag]);
      setInputValue("");
    },
    [onChange, values]
  );

  const onCreateTag: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    appendTag(inputValue);
  };

  return (
    <form
      onSubmit={onCreateTag}
      className={classNames("flex flex-col gap-1 relative", className)}
    >
      <div className="flex items-stretch gap-2">
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="input input-sm"
          placeholder={placeholder}
        />
        <button
          disabled={!inputValue}
          type="submit"
          className="btn btn-sm btn-square btn-success"
        >
          <FaCheck />
        </button>
      </div>
      <div className="flex flex-wrap items-center gap-2 py-4">
        {values.map((result, index) => (
          <span
            key={result}
            className="badge py-2 overflow-hidden whitespace-nowrap text-ellipsis cursor-pointer bg-neutral hover:bg-neutral/700"
          >
            {result}
            <button
              className="btn btn-xs btn-circle btn-ghost"
              onClick={() => onRemoveItemAtIndex(index)}
            >
              <FaTimes />
            </button>
          </span>
        ))}
      </div>
      <SearchResultPanel
        onSelectSearchResult={appendTag}
        searchResult={tagsSearchResult}
        loading={loading}
      />
    </form>
  );
}
