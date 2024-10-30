export default function CardSection({ cards }) {
  return (
      <div className='demo-section'>
        {cards?.map((card, index) => (
            <div className='cards' key={index}>
              {card.title && (
                  <h3 {...(card.$ && card.$.title ? card.$.title : {})}>
                    {card.title}
                  </h3>
              )}
              {card.description && (
                  <p {...(card.$ && card.$.description ? card.$.description : {})}>
                    {card.description}
                  </p>
              )}
              <div className='card-cta'>
                {card.call_to_action.title && card.call_to_action.href && (
                    <Link href={card.call_to_action.href} className='btn primary-btn'>
                      {card.call_to_action.title}
                    </Link>
                )}
              </div>
            </div>
        ))}
      </div>
  );
}