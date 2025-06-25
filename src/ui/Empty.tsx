function Empty({
  resource,
  className,
}: {
  resource: string;
  className?: string;
}) {
  return (
    <p className={`${className} text-xl font-semibold`}>
      No {resource} could be found.
    </p>
  );
}

export default Empty;
