type Props = {
  searchResult: string[] | null | undefined;
  loading?: boolean;
  onSelectSearchResult: (selectedResult: string) => void;
};
export default function SearchResultPanel({
  searchResult,
  loading,
  onSelectSearchResult,
}: Props) {
  const shouldShow = !!searchResult?.length || !!loading;
  if (!shouldShow) return null;
  return (
    <div className="absolute left-0 right-0 top-full min-h-12 flex flex-col items-stretch rounded-lg z-10 shadow-lg bg-neutral py-4 px-2">
      {loading ? (
        <span className="loading loading-spinner loading-xs" />
      ) : (
        searchResult?.map((result) => (
          <span
            onClick={() => onSelectSearchResult(result)}
            className="hover:bg-neutral-500 hover:text-neutral-800 overflow-hidden text-ellipsis whitespace-nowrap rounded-lg px-2 py-1 cursor-pointer"
            key={result}
          >
            {result}
          </span>
        ))
      )}
    </div>
  );
}
