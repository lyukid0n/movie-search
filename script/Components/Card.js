function Card(data) {
  return `<div>${data}</div>`;
}

export default async (data) => {
    // const 
  return `
            <div>
                ${data.mapStr((el) => Card(el))}
            </div>
    `;
};
