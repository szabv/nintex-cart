export const fetchProducts = async () => {
   return Promise.resolve([
      {
         id: 'wf',
         name: 'Workflow',
         price: 199.99,
      },
      {
         id: 'docgen',
         name: 'Document Generation',
         price: 9.99,
      },
      {
         id: 'form',
         name: 'Form',
         price: 99.99,
      },
   ]);
};
