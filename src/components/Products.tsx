import React from 'react';
import { useContactsQuery, useAddContactMutation } from './contactsApi';

function Products() {
  const [page, setPage] = React.useState(1);
  const { data, error, isLoading, isFetching, isSuccess } = useContactsQuery(
    page,
    {
      // pollingInterval: 6000
    }
  );
  console.log('Loading: ' + isLoading, 'Fetching: ' + isFetching);

  return (
    <div>
      <h1>React Redux Toolkit RTK</h1>
      {isLoading && <h2>...Loading</h2>}
      {isFetching && <h2>...Fetching</h2>}
      {error && <h2>Something went wrong</h2>}
      {isSuccess && (
        <div>
          {data?.map((contact: any) => {
            return (
              <div key={contact.id}>
                <span>{contact.name}</span>
              </div>
            );
          })}
        </div>
      )}

      <button onClick={() => setPage((prev) => prev - 1)} disabled={page === 1}>
        Back
      </button>
      <button onClick={() => setPage((prev) => prev + 1)} disabled={page === 4}>
        Forward
      </button>
      <div>
        <AddContact />
      </div>
    </div>
  );
}

export const AddContact = () => {
  const [addContact] = useAddContactMutation();
  const contact = {
    id: '11',
    name: 'akash',
    email: 'akash@gmail.com',
  };

  const addHandler = async () => {
    await addContact(contact);
  };

  return (
    <>
      <button onClick={addHandler}>Add Contact</button>
    </>
  );
};

export default Products;
