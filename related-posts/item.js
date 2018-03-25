const Item = ( props ) => {
	const { handleClick, post, postName, isActive } = props;

	// Set classname if post.id exists in selected posts.
	function className() {
		// If current post is in selectedPosts.
		if ( post && undefined !== isActive ) {
			if ( isActive.filter( e => e.id === post.id ).length > 0 ) {
				return post.slug + ' is-selected';
			}

			return post.slug;
		}
	}

	/* eslint-disable */
	return <li className={ className() } onClick={ ( ( e ) => handleClick( { e, post } ) ) }> { postName } </li>;
}

export default Item;
