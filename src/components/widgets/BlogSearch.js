import React from 'react';

const BlogSearch = () => {
    return (
        <>
            <div className="sidebar__single widget_search">
                <form className="sidebar__search-form" action="#" method="get">
                    <input type="search" placeholder="Search here" />
                    <button type="submit"><i className="fa-regular fa-magnifying-glass"></i></button>
                </form>
            </div>
        </>
    )
}

export default BlogSearch;