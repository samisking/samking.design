import React from 'react';
import { Box, WordMark, Caption, Link } from '../design-system';

function SiteHeader(props) {
  return (
    <Box as="header" role="banner" pt={[1, 2]} px={[1, 2]} {...props}>
      <WordMark as="h1" mb={0}>
        <Link to="/" shouldUnderline={false}>
          Sam King
        </Link>
      </WordMark>
      <Caption as="h2" color="textAlt">
        Product Designer at Echo
      </Caption>
    </Box>
  );
}

export default SiteHeader;
