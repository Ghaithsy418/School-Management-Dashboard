export const downloadFile = function (url: string) {
  const link = document.createElement("a");
  link.href = url;

  const urlParts = url.split("/");
  link.download = urlParts[urlParts.length - 1] || "ExcelSheetTemplate";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
