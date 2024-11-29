export const helpers = [
  {
    name: 'formatCurrency',
    description: 'Formatea un precio como moneda (EUR).',
    code: `export const formatCurrency = (price) => {
  return Number(price).toLocaleString('es-ES', {
    style: 'currency',
    currency: 'EUR'
  });
};`
  },
  {
    name: 'generateID',
    description: 'Genera un ID único basado en un valor aleatorio y la fecha actual.',
    code: `export const generateID = () => {
  const random = Math.random().toString(36).substring(2);
  const date = Date.now().toString(36);
  return random + date;
};`
  },
  {
    name: 'formatDate',
    description: 'Formatea una fecha en el formato "dd/mm/yyyy".',
    code: `export const formatDate = (inputDate) => {
  const dateObj = new Date(inputDate);
  const day = dateObj.getDate();
  const month = dateObj.getMonth() + 1; 
  const year = dateObj.getFullYear();
  const formattedDay = day < 10 ? \`0\${day}\` : day;
  const formattedMonth = month < 10 ? \`0\${month}\` : month;
  return \`\${formattedDay}/\${formattedMonth}/\${year}\`;
};`
  },
  {
    name: 'getCurrentDate',
    description: 'Obtiene la fecha actual en formato "dd/mm/yyyy".',
    code: `export const getCurrentDate = () => {
  const date = new Date();
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return \`\${day}/\${month}/\${year}\`;
};`
  },
  {
    name: 'getTimestamp',
    description: 'Obtiene el timestamp de una fecha.',
    code: `export const getTimestamp = (inputDate) => {
  return new Date(inputDate).getTime();
};`
  }
]
