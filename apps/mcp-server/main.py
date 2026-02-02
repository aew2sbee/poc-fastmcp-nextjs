from fastmcp import FastMCP

# MCPサーバーのインスタンスを作成
mcp = FastMCP("My Demo Server")

@mcp.tool()
def echo_message(text: str) -> str:
    """
    受け取ったテキストに挨拶を添えて返す簡単なツールです。
    """
    return f"FastMCPからの返信だよ ► {text}"

if __name__ == "__main__":
    mcp.run()