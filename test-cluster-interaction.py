def test_canvas(page):
    page.goto("https://localhost/dashboard/auth/login")
    page.wait_for_timeout(3000)

    page.click("input[type=\"text\"]")
    page.type("input[type=\"text\"]", "admin")
    page.press("input[type=\"text\"]", "Tab")
    page.type("input[type=\"password\"]", "twelvecharacters")
    with page.expect_navigation():
        page.click("button:has-text(\"Log in with Local User\")")
    page.wait_for_timeout(3000)
    page.click("svg")

    page.hover("text=local")
    page.wait_for_timeout(3000)
    page.click("text=local")

    page.hover("[aria-label=\"Search\\ for\\ option\"] div")
    page.wait_for_timeout(3000)
    page.click("[aria-label=\"Search\\ for\\ option\"] div")

    page.hover("b:has-text(\"Project: Default\")")
    page.wait_for_timeout(3000)
    page.click("b:has-text(\"Project: Default\")")
    page.click("b:has-text(\"Project: Default\")")

    page.hover("text=Workload")
    page.wait_for_timeout(3000)
    page.click("text=Workload")

    page.hover("text=Create")
    page.wait_for_timeout(3000)
    page.click("text=Create")

    with page.expect_navigation():
        page.hover("text=Deployment Deployments run a scalable number of replicas of a pod distributed am >> div")
        page.wait_for_timeout(3000)
        page.click("text=Deployment Deployments run a scalable number of replicas of a pod distributed am >> div")

    page.hover("input[type=\"text\"]")
    page.wait_for_timeout(3000)
    page.click("input[type=\"text\"]")

    page.wait_for_timeout(3000)
    page.type("input[type=\"text\"]", "nginx")

    page.hover("[placeholder=\"e\\.g\\.\\ nginx\\:latest\"]")
    page.wait_for_timeout(3000)
    page.click("[placeholder=\"e\\.g\\.\\ nginx\\:latest\"]")

    page.wait_for_timeout(3000)
    page.type("[placeholder=\"e\\.g\\.\\ nginx\\:latest\"]", "nginx")

    page.hover("text=Command Arguments >> :nth-match(div, 2)")
    page.wait_for_timeout(3000)
    page.click("text=Add Port")

    page.hover("text=Do not create a service Loading...")
    page.wait_for_timeout(3000)
    page.click("text=Do not create a service Loading...")

    page.hover("text=Cluster IP")
    page.wait_for_timeout(3000)
    page.click("text=Cluster IP")

    page.hover("[placeholder=\"e\\.g\\.\\ 8080\"]")
    page.wait_for_timeout(3000)
    page.click("[placeholder=\"e\\.g\\.\\ 8080\"]")

    page.wait_for_timeout(3000)
    page.type("[placeholder=\"e\\.g\\.\\ 8080\"]", "80")

    with page.expect_navigation():
        page.hover("button:has-text(\"Create\")")
        page.wait_for_timeout(3000)
        page.click("button:has-text(\"Create\")")

    page.hover("div:nth-child(3) .header .icon")
    page.wait_for_timeout(3000)
    page.click("div:nth-child(3) .header .icon")

    page.hover("text=Services")
    page.wait_for_timeout(3000)
    page.click("text=Services")

    with page.expect_navigation():
        page.hover("text=nginx")
        page.wait_for_timeout(3000)
        page.click("text=nginx")

    page.hover("div:nth-child(2) .header .icon")
    page.wait_for_timeout(3000)
    page.click("div:nth-child(2) .header .icon")

    page.hover("[aria-label=\"Search\\ for\\ option\"] div")
    page.wait_for_timeout(3000)
    page.click("[aria-label=\"Search\\ for\\ option\"] div")

    page.hover("text=All Namespaces")
    page.wait_for_timeout(3000)
    page.click("text=All Namespaces")
    page.click("text=All Namespaces")

    with page.expect_navigation():
        page.hover("text=Charts")
        page.wait_for_timeout(3000)
        page.click("text=Charts")

    page.hover("text=Cluster Tools")
    page.wait_for_timeout(3000)
    page.click("text=Cluster Tools")

    with page.expect_navigation():
        page.hover("text=Monitoring v100.1.0+up19.0.3 Collects several related Helm charts, Grafana dashb >> button")
        page.wait_for_timeout(3000)
        page.click("text=Monitoring v100.1.0+up19.0.3 Collects several related Helm charts, Grafana dashb >> button")

    with page.expect_navigation():
        page.hover("button:has-text(\"Next\")")
        page.wait_for_timeout(3000)
        page.click("button:has-text(\"Next\")")

    with page.expect_navigation():
        page.hover("button:has-text(\"Install\")")
        page.wait_for_timeout(3000)
        page.click("button:has-text(\"Install\")")

    page.hover("text=Install cattle-monitoring-system:rancher-monitoring Follow Clear Download Connec >> :nth-match(i, 2)")
    page.wait_for_timeout(3000)
    page.click("text=Install cattle-monitoring-system:rancher-monitoring Follow Clear Download Connec >> :nth-match(i, 2)")
    page.wait_for_timeout(10000)

    page.hover("text=Monitoring")
    page.wait_for_timeout(3000)
    page.click("text=Monitoring")

    page.hover("button")
    page.wait_for_timeout(3000)
    page.click("button")

    page.hover(".CodeMirror-scroll")
    page.wait_for_timeout(3000)
    page.click(".CodeMirror-scroll")

    page.wait_for_timeout(3000)
    page.type(":nth-match(textarea, 2)", "Yaml File to Import ")

    page.hover("text=Cancel")
    page.wait_for_timeout(3000)
    page.click("text=Cancel")

    page.hover("header >> :nth-match(button, 2)")
    page.wait_for_timeout(3000)
    page.click("header >> :nth-match(button, 2)")

    page.hover("text=Kubectl: local Clear Connected W >> :nth-match(i, 2)")
    page.wait_for_timeout(3000)
    page.click("text=Kubectl: local Clear Connected W >> :nth-match(i, 2)")

    with page.expect_download() as download_info:
        page.hover("header >> :nth-match(button, 3)")
        page.wait_for_timeout(3000)
        page.click("header >> :nth-match(button, 3)")

    download = download_info.value
    page.wait_for_timeout(3000)
    download = download_info.value

    page.hover("header >> :nth-match(button, 5)")
    page.wait_for_timeout(3000)
    page.click("header >> :nth-match(button, 5)")

    page.hover("[placeholder=\"Type\\ to\\ search\\ for\\ a\\ resource\\.\\.\\.\"]")
    page.wait_for_timeout(3000)
    page.click("[placeholder=\"Type\\ to\\ search\\ for\\ a\\ resource\\.\\.\\.\"]")

    page.wait_for_timeout(3000)
    page.type("[placeholder=\"Type\\ to\\ search\\ for\\ a\\ resource\\.\\.\\.\"]", "deployment")

    page.hover("text=Deployments")
    page.wait_for_timeout(3000)
    page.click("text=Deployments")

    with page.expect_navigation():
        page.hover("text=Cluster")
        page.wait_for_timeout(3000)
        page.click("text=Cluster")

