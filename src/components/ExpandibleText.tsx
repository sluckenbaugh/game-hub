import { Button, Text } from "@chakra-ui/react";
import React, { Children, useState } from "react";

interface Props {
  children: string;
}

const ExpandibleText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if (children.length <= limit) return <Text>{children}</Text>;

  const summary = expanded ? children : children.substring(0, limit);

  return (
    <Text>
      {summary}
      {!expanded && (
        <>
          {"..."}
          <Button size="xs" marginStart={2} onClick={() => setExpanded(true)}>
            Show More
          </Button>
        </>
      )}
    </Text>
  );
};

export default ExpandibleText;
