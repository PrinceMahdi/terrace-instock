/* ---------------- SCSS IMPORTS ---------------- */
import "./InventoryItemDetails.scss";

const InventoryItemDetails = () => {
  return (
    <section className="inventory__item-details">
      <div className="inventory__item-details__container">
        <div className="inventory__item-details__container--top">
          <div className="inventory__item-details__back__arrow"></div>
          <h1 className="inventory__item-details__title">Television</h1>
        </div>
        <button className="inventory__item-details__button">
          <div className="inventory__item-details__button-icon"></div>
          <div className="inventory__item-details__button-text">Edit</div>
        </button>
      </div>
      <div className="inventory__item-details--bottom">
        <div className="inventory__item-details--left">
          <h3 className="inventory__item-description__title">
            ITEM DESCRIPTION:
          </h3>
          <p className="inventory__item-description inventory__item-description--top">
            This 50", 4K LED TV provides a crystal-clear picture and vivid
            colors.
          </p>
          <h3 className="inventory__item-description__title">CATEGORY:</h3>
          <p className="inventory__item-description">Electronics</p>
        </div>
        <div className="inventory__item-details--right">
          <div className="inventory__item-details--bottom-container">
            <div className="inventory__item-details--bottom-container--left">
              <h3 className="inventory__item-description__title">STATUS:</h3>
              <p className="inventory__item-description__label inventory__item-description--top">
                IN STOCK
              </p>
            </div>
            <div className="inventory__item-details--bottom-container--right">
              <h3 className="inventory__item-description__title">QUANITITY:</h3>
              <p className="inventory__item-description">500</p>
            </div>
          </div>
          <h3 className="inventory__item-description__title">WAREHOUSE:</h3>
          <p className="inventory__item-description">Manhattan</p>
        </div>
      </div>
    </section>
  );
};

export default InventoryItemDetails;
