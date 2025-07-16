function SmallSpinner({ size = "h-[26px] w-[26px]" }: { size?: string }) {
  return (
    <div
      className={`${size} animate-spin rounded-full border-4 border-indigo-50/10 border-t-indigo-50`}
    />
  );
}

export default SmallSpinner;
