export const FavoriteFilter = ({onChangeFilter}) => {
  const handleChange = ({target}) => {
    const value = target.value;
    onChangeFilter(value);
  };

  return (
    <section className="contact-filter text-center">
      <section>
        <input
          onChange={handleChange}
          type="text"
          id="term"
          name="term"
          placeholder="Search"
        />
      </section>
    </section>
  );
};
