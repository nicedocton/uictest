import { onMounted, onUnmounted } from "vue";

export function useLifecycleLogger(payload: { name: string }) {
    onMounted(() => {
        //eslint-disable-next-line no-console
    });

    onUnmounted(() => {
        //eslint-disable-next-line no-console
    });
}
