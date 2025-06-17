function NoItems({ name }: NoItemsTypes) {
  return (
    <div className="mt-10 flex min-w-[25rem] items-center justify-center place-self-center rounded-xl bg-indigo-200 p-7">
      <h2 className="text-2xl font-semibold">No {name} for now :(</h2>
    </div>
  );
}

interface NoItemsTypes {
  name: string;
}

export default NoItems;
