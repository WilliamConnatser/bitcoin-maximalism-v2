<template>
    <footer id="footer" class="small-text">
        <li>
            <a href="https://github.com/WilliamConnatser/bitcoin-maximalism-v2" target="_blank" rel="noopener" class="unstyled-link">
                <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'github-square' }" class="extra-large-icon" />
            </a>
        </li>
        <li>
            <a href="https://twitter.com/BTCMaximalism21" target="_blank" rel="noopener" class="unstyled-link">
                <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter-square' }" class="extra-large-icon" />
            </a>
        </li>
        <br/>
        <li>&copy; YOLO International LLC 2019</li>
        <br/>
        <li>
            <router-link to="/terms" class="regular-link">Terms</router-link>
        </li>
        <li>
            <router-link to="/privacy" class="regular-link">Privacy</router-link>
        </li>
    </footer>
</template>

<script>
    export default {
        name: "Footer"
    };
</script>