export function badRequest(data: any): Response {
  return new Response(data, { status: 400 })
}

// TODO: Make contact form cleared out after submitted
export function handleFormSubmitted(form: FormData, fields: string[]) {
  fields.forEach((field) => {
    form.delete(field);
  });
  return "Successfully clear form values";
}


export function splitTopicsStringIntoArray(topicsString: string | null) {
  if (topicsString === null) {
    return ["personal"];
  }
  if (topicsString === undefined) {
    return ["undefined"];
  }
  const topics = topicsString.split(",");
  return topics;
}


