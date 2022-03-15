def test_canvas(page):
    page.goto("/dashboard/auth/login")
    page.wait_for_timeout(3000)

    page.click("input[type=\"text\"]")
    page.type("input[type=\"text\"]", "admin")
    page.press("input[type=\"text\"]", "Tab")
    page.type("input[type=\"password\"]", "twelvecharacters")
    with page.expect_navigation():
        page.click("button:has-text(\"Log in with Local User\")")
    page.wait_for_timeout(3000)
    page.click("svg")

    page.hover("text=Cluster Management")
    page.wait_for_timeout(3000)
    page.click("text=Cluster Management")

    page.hover("text=Create")
    page.wait_for_timeout(3000)
    page.click("text=Create")

    page.hover("text=Amazon EKS")
    page.wait_for_timeout(3000)
    page.click("text=Amazon EKS")

    page.frame(name="ember-iframe").click("[placeholder=\"e\\.g\\.\\ sandbox\"]")
    page.wait_for_timeout(3000)

    page.frame(name="ember-iframe").type("[placeholder=\"e\\.g\\.\\ sandbox\"]", "test")
    page.wait_for_timeout(3000)

    page.frame(name="ember-iframe").hover("text=Create")

    page.frame(name="ember-iframe").select_option("select", "us-east-1")
    page.wait_for_timeout(3000)

    page.frame(name="ember-iframe").click("[placeholder=\"e\\.g\\.\\ production-credentials\"]")
    page.wait_for_timeout(3000)

    page.frame(name="ember-iframe").type("[placeholder=\"e\\.g\\.\\ production-credentials\"]", "credentials")
    page.wait_for_timeout(3000)

    page.frame(name="ember-iframe").click("[placeholder=\"Your\\ AWS\\ access\\ key\"]")
    page.wait_for_timeout(3000)

    page.frame(name="ember-iframe").click("[placeholder=\"Your\\ AWS\\ access\\ key\"]")
    page.wait_for_timeout(3000)

    page.frame(name="ember-iframe").type("[placeholder=\"Your\\ AWS\\ access\\ key\"]", "Insert Access Key")
    page.wait_for_timeout(3000)

    page.frame(name="ember-iframe").click("[placeholder=\"Your\\ AWS\\ secret\\ key\"]")
    page.wait_for_timeout(3000)

    page.frame(name="ember-iframe").type("[placeholder=\"Your\\ AWS\\ secret\\ key\"]", "Insert Secret Key")
    page.wait_for_timeout(3000)

    page.frame(name="ember-iframe").click("text=Create")
    page.wait_for_timeout(3000)

    page.frame(name="ember-iframe").hover("text=Next: Configure Network")
    page.wait_for_timeout(3000)
    page.frame(name="ember-iframe").click("text=Next: Configure Network")

    page.frame(name="ember-iframe").hover("text=Next: Select Security Group")
    page.wait_for_timeout(3000)
    page.frame(name="ember-iframe").click("text=Next: Select Security Group")

    page.frame(name="ember-iframe").click("textarea")
    page.wait_for_timeout(3000)

    page.frame(name="ember-iframe").hover("button:has-text(\"Create\")")
    page.wait_for_timeout(3000)

    page.frame(name="ember-iframe").click("text=Node Group Name * Desired ASG Size Maximum ASG Size Minimum ASG Size >> input[type=\"text\"]")
    page.wait_for_timeout(3000)

    page.frame(name="ember-iframe").type("text=Node Group Name * Desired ASG Size Maximum ASG Size Minimum ASG Size >> input[type=\"text\"]", "example")
    page.wait_for_timeout(3000)

    page.frame(name="ember-iframe").press("text=Node Group Name * Desired ASG Size Maximum ASG Size Minimum ASG Size >> input[type=\"text\"]", "Tab")
    page.wait_for_timeout(3000)

    with page.expect_navigation():
        page.frame(name="ember-iframe").click("button:has-text(\"Create\")")
    page.wait_for_timeout(3000)

